import React, { useState, useEffect } from 'react';
import { MdDelete, MdEdit } from "react-icons/md";
import { FcCheckmark, FcCancel } from "react-icons/fc";
import { GiCoffeeCup } from "react-icons/gi";
import ITodoList from '../../interfaces/Home/index';

import { 
    Container,
    MainContent,
    ContentTitle,
    Title,
    ContentInput,
    ContentLabel,
    Label,
    LabelTask,
    Input,
    Button,
    ContentTodos,
    TodoList,
    TaskDescription,
    Icon,
    Text,
    BuyMeACoffe
} from './style';


const _getItem = localStorage.getItem('todo-list') || "[]"
const _transformerObjectToArray = JSON.parse(_getItem);

export default function Home() {
    const [taskId, setTaskId] = useState<string>("");
    const [Name, setName] = useState<string>("");
    const [Description, setDescription] = useState<string>("");
    const [todoList, setTodoList] = useState<ITodoList[]>(_transformerObjectToArray);

    useEffect(() => {
        localStorage.setItem('todo-list', JSON.stringify(todoList))
    },[todoList])

    const createNewTodoList = () => {
        const object = {id: String(Math.random()),name: Name, description: Description, completed: false}
        setTodoList([...todoList, object]);
        setName('');
        setDescription('');
    }

    const deleteTask = (id: string) => {
        const filter = todoList.filter(task => task.id !== id);
        setTodoList(filter);
    }

    const editTask = (id: string | null) => {
        
        const foundTask: ITodoList = todoList.filter(task => task.id === id || taskId)[0];
        
        if(taskId) {
            const remainderTasks: ITodoList[] = todoList.filter(task => task.id !== taskId);
            setTodoList([...remainderTasks, {
                id: taskId,
                name: Name,
                description: Description,
                completed: foundTask.completed
            }]);

            setTaskId("");
            setName("");
            setDescription("");
        } else {
            setTaskId(foundTask.id);
            setName(foundTask.name);
            setDescription(foundTask.description);
        }

    }

    const completedTask = (id:string) => {
        const updatedTodos = todoList.map((task) => {
            if(task.id === id) {
                task.completed = !task.completed
            }
            return task
        })
        setTodoList(updatedTodos)
    }

    return (
        <Container>
            <MainContent>
                <ContentTitle>
                    <Title> Todo List </Title>
                </ContentTitle>

                <ContentInput>
                    <ContentLabel>
                        <Label>Nome Task</Label>
                        <Input onChange={e => setName(e.target.value)} value={Name}/>
                    </ContentLabel>
                    <ContentLabel>
                        <Label>Descrição</Label>
                        <Input onChange={e => setDescription(e.target.value)} value={Description}/>
                    </ContentLabel>
                    <Button onClick={() => taskId ? editTask(null) : createNewTodoList() }> {taskId ? "Editar" : "Criar"} </Button>
                </ContentInput>

                <ContentTodos>
                    {todoList.map((_task) => _task.completed === false ? (
                        <TodoList key={_task.id}>
                            <TaskDescription>
                                <LabelTask>{_task.name}</LabelTask>
                                <Text>{_task.description}</Text>
                            </TaskDescription>

                            <Icon>
                                <Button onClick={() => editTask(_task.id)}>
                                    <MdEdit color="#fff" size={24}/>
                                </Button>

                                <Button onClick={() => deleteTask(_task.id)}>
                                    <MdDelete color="#fff" size={24}/>
                                </Button>

                                <Button onClick={() => completedTask(_task.id)}>
                                    <FcCheckmark size={24}/>
                                </Button>
                            </Icon>
                        </TodoList>                        
                    ) : (
                        <TodoList key={_task.id}>
                            <TaskDescription>
                                <LabelTask><s>{_task.name}</s></LabelTask>
                                <Text><s>{_task.description}</s></Text>
                            </TaskDescription>

                            <Icon>
                                <Button onClick={() => deleteTask(_task.id)}>
                                    <MdDelete color="#fff" size={24}/>
                                </Button>

                                <Button onClick={() => completedTask(_task.id)}>
                                    <FcCancel size={24}/>
                                </Button>
                            </Icon>
                        </TodoList> )
                    )}
                </ContentTodos>
            </MainContent>
            {/* <BuyMeACoffe>
                <Label>Buy me a coffe</Label>
                <a href="https://ko-fi.com/gustavoribeiro" target="_blank">
                    <Button>
                            <GiCoffeeCup size={30}/>
                    </Button>
                </a>
            </BuyMeACoffe> */}
        </Container>
    )
}