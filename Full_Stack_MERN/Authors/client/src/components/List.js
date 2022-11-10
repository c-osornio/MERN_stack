import React, { useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import DeleteButton from './DeleteButton';


const List = (props) => {
    const {removeFromDom, authors, setAuthors} = props;
    const navigate = useNavigate()

    const sortedAuthors = [...authors].sort( (a, b) => (a.name > b.name) ? 1 : -1 );

    useEffect( () => {
        axios.get('http://localhost:8000/api/authors')
            .then((res) => {
                console.log(res.data);
                setAuthors(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Container className="mt-4">
                <Table striped bordered hover variant="dark" size="sm">
                    <thead>
                        <tr>
                            <th>
                                <h3>Author</h3>
                            </th>
                            <th>
                                <h3>Actions</h3>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sortedAuthors.map((item, idx) => (
                                    <tr key={idx} >
                                        <td>
                                            <h4 className="text-capitalize text-warning p-3">
                                                {item.name}
                                            </h4>
                                        </td>
                                        <td className= "text-center p-3">
                                            <Button className=" me-2" variant="warning" onClick={() => navigate(`/authors/edit/${item._id}`)}>Edit</Button>
                                            <DeleteButton authorId={item._id} successCallback={()=>removeFromDom(item._id)} />
                                        </td>
                                    </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Container>
        </>

    )
}

export default List