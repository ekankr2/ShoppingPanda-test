import React, {useState} from 'react';

import {useStore} from '../../hooks/zustandExampleHooks'
import {
    Button,
    Checkbox,
    Container, IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    TextField
} from "@mui/material";

const TestPage = () => {
    const [todoText, setTodoText] = useState("")
    const {addTodo, removeTodo, toggleCompletedState, todos} = useStore();

    return (
        <Container>
            <h3>Zustand Test</h3>
            <TextField
                label='Todo Description'
                required
                variant='outlined'
                fullWidth
                onChange={(e) => setTodoText(e.target.value)}
                value={todoText}
            />
            <Button
                variant='outlined'
                color='primary'
                onClick={() => {
                    if (todoText.length) {
                        addTodo(todoText);
                        setTodoText("")
                    }
                }}
            >
                Add Item
            </Button>
            <List>
                {todos.map((todo) => (
                    <ListItem key={todo.id}>
                        <ListItemIcon>
                            <Checkbox
                                edge='start'
                                checked={todo.completed}
                                onChange={() => toggleCompletedState(todo.id)}
                            />
                        </ListItemIcon>
                        <ListItemText
                            key={todo.id}
                        >
                            {todo.description}
                        </ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton
                                onClick={() => {
                                    removeTodo(todo.id);
                                }}
                            >
                                <i className='bx bx-comment-x'></i>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default TestPage;
