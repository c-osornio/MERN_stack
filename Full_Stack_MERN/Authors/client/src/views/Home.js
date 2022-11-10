import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav';
import List from '../components/List';
import axios from "axios";
import io from 'socket.io-client';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const [authors, setAuthors] = useState([]);

    const navigate = useNavigate()

    const [socket] = useState( () => io(':8000') );

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                console.log(res.data);
                setAuthors(res.data)
            })
            .catch((err)=> {
                console.log(err);
            })
    }, [])

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId)); 
    }

    useEffect( () => {
        console.log('Socket is running');
        socket.on('receive_authors', (authors) => {
            console.log("Received Authors:", authors)
            setAuthors(authors)
            return () => socket.disconnect(true);
        });
        socket.on('receive_removal', (data) => {
            console.log("Received Author Id for Removal:", data)
            setAuthors(authors.filter( author => author._id !== data))
            return () => socket.disconnect(true);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [socket, authors] );




    return (
        <>
            <Nav/>
            <div className="bg-warning text-primary text-center">
                <ul className="list-inline">
                    <li className="list-inline-item btn" onClick={()=> navigate('/authors/new')}>
                        <u>
                            <h4><AddIcon color="primary"/>Add an author</h4>
                        </u>
                    </li>
                </ul>
            </div>
            <h1 className="ms-3">We have quotes by:</h1>
            <List authors={authors} setAuthors={setAuthors} removeFromDom={removeFromDom}/>
        </>
    )
}

export default Home