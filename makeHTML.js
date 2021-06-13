function makeHTML () {
    console.log("Thank you for using Team Generator! Your HTML document is being written now...")

    const templateArray = []
    const initialHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
    <style></style>
</head>
<body>
    <header>
        <h1>Team Profile</h1>
    </header>
    <main>
    `
    templateArray.push(initialHTML);
}