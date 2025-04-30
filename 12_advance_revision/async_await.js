async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("7" + " " + "Thala for a reason");
    }, 7000);
  });
}

async function main() {

  console.log("Loading module");
  console.log("Do something else");
  console.log("Load data");

  let data = await getData();
  console.log(data);

  console.log("Process data");
  console.log("Task 2");

}
main()










