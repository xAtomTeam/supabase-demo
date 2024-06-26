import {
  WFComponent,
  WFDynamicList,
  WFFormComponent,
} from "@xatom/core";
import { logout, userAuth } from "../auth";
import supabase from "../supbase";

const renderLogoutBtn = () => {
  //logout button
  const btn = new WFComponent(`[xa-type=cta-btn]`);
  //on click setting up button text and calling logout function
  btn.on("click", (e) => {
    e.preventDefault();
    btn.setTextContent("Please wait...");
    logout();
  });
  //changing create account text to logout text
  btn.setTextContent("Logout");
};
export const taskList = () => {
  renderLogoutBtn();
  const form = new WFFormComponent<{ task: string }>(
    `[xa-type="task-list"]`
  );

  let taskList: {
    id: number;
    task: string;
    done: boolean;
    created_at: string;
  }[] = [];

  const list = new WFDynamicList<(typeof taskList)[0]>(
    `[xa-type="list"]`,
    {
      rowSelector: `[xa-type="item"]`,
      emptySelector: `[xa-type="list-empty"]`,
      loaderSelector: `[xa-type="list-loading"]`,
    }
  );
  let isLoading = true;
  //fetching all items
  const fetch = () => {
    isLoading = true;
    form.disableForm();
    list.changeLoadingStatus(true);
    supabase
      .from("Task")
      .select()
      .then((data) => {
        console.log(data);
        form.enableForm();
        //sorting items based on id.
        taskList = data.data.sort((a, b) => a.id - b.id);
        list.changeLoadingStatus(false);
        list.setData(taskList);
        isLoading = false;
      });
  };
  //adding new task
  const addTask = (task: string) => {
    isLoading = true;
    form.disableForm();
    list.changeLoadingStatus(true);
    supabase
      .from("Task")
      .insert({
        task: task,
        done: false,
        email: userAuth.getUser().email,
      })
      .then((data) => {
        if (data.error) {
          form.enableForm();
          alert(
            data.error.message || "Something went wrong!"
          );
          isLoading = false;

          return;
        }
        form.resetForm();
        fetch();
      });
  };
  //update task status
  const changeTaskStatus = (
    taskId: number,
    status: boolean
  ) => {
    isLoading = true;
    form.disableForm();
    list.changeLoadingStatus(true);
    supabase
      .from("Task")
      .update({
        done: status,
      })
      .eq("id", taskId)
      .eq("email", userAuth.getUser().email)
      .then((data) => {
        if (data.error) {
          form.enableForm();
          alert(
            data.error.message || "Something went wrong!"
          );
          isLoading = false;
          return;
        }
        form.resetForm();
        fetch();
      });
  };
  //delete task
  const deleteTask = (taskId: number) => {
    isLoading = true;
    form.disableForm();
    list.changeLoadingStatus(true);
    supabase
      .from("Task")
      .delete()
      .eq("id", taskId)
      .eq("email", userAuth.getUser().email)
      .then((data) => {
        if (data.error) {
          form.enableForm();
          alert(
            data.error.message || "Something went wrong!"
          );
          isLoading = false;
          return;
        }
        form.resetForm();
        fetch();
      });
  };

  list.rowRenderer(({ rowData, rowElement }) => {
    const { doneBtn, deleteBtn, taskText } =
      rowElement.getManyChildAsComponents({
        doneBtn: "[xa-type=done]",
        deleteBtn: "[xa-type=delete]",
        taskText: `[xa-type=item-text]`,
      });
    rowElement.updateTextViaAttrVar({
      "task-text": rowData.task,
    });
    if (rowData.done) {
      doneBtn.addCssClass("active");
      taskText.addCssClass("active");
    } else {
      doneBtn.removeCssClass("active");
      taskText.removeCssClass("active");
    }

    doneBtn.on("click", () => {
      if (isLoading) {
        return;
      }
      changeTaskStatus(rowData.id, !rowData.done);
    });
    deleteBtn.on("click", () => {
      if (isLoading) {
        return;
      }
      deleteTask(rowData.id);
    });

    return rowElement;
  });

  list.setData([]);

  form.onFormSubmit((data) => {
    if (!data.task || data.task.trim().length === 0) {
      return;
    }

    addTask(data.task);
  });

  fetch();
};
