var botui = new BotUI('my-botui-app');

botui.message.add({
    content: 'Hello from bot.'
});

botui.action.button({
    delay: 500,
    action: [
        {
            text: 'Uh... '
        },
        {
            text: 'Hello?'
        }
    ]
})

botui.message.add({
    delay: 1000,
    content: 'Hello from bot.'
});
botui.message.add({
    delay: 1000,
    content: 'Hello from bot.'
});
botui.message.add({
    delay: 1000,
    content: 'Hello from bot.'
});
botui.message.add({
    delay: 1000,
    content: 'Hello from bot.'
});
botui.message.add({
    delay: 1000,
    content: 'Hello from bot.'
});
botui.message.add({
    delay: 1000,
    content: 'Hello from bot.'
});
botui.message.add({
    delay: 1000,
    content: 'Hello from bot.'
});