const stdin = process.openStdin();
stdin.addListener("data", text => {
  const a = text.toString().split(" ");

  console.log(parseInt(a[0]) + parseInt(a[1]));

  stdin.pause();
});
