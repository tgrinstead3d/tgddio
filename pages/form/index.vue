<template>
    <div>
        <h1>Test Form</h1>
    </div>
    <form name="test" method="POST" data-netlify="true">
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
        <button type="submit">Submit</button>
    </form>
</template>