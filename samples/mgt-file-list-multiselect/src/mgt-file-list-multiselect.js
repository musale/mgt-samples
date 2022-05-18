const mgtFileList = document.querySelector("mgt-file-list");

mgtFileList.templateContext = {
  itemClicked: (e, context, root) => {
    console.log("context ", context);
    console.log("root ", root);
    console.log("Clicked ", e.detail);
    return false;
  }
};
