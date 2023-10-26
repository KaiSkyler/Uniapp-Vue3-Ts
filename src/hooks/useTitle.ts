export const useTitle = () => {
  let oldValue = 'oldValue';
  let newValue = 'newValue';
  let screenWidth : number = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const title = ref(oldValue);
  function changeTitle(titleValue:string) : void {
    oldValue = title.value;
    title.value = <string>titleValue;
    newValue = oldValue;
  }
  return {
    title,
    screenWidth,
    changeTitle
  };
};
