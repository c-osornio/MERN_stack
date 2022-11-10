import React from 'react'
import Nav from '../components/Nav';
import Update from '../components/Update';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';

const UpdateView = () => {
    const navigate = useNavigate()
    return (
        <>
            <Nav/>
            <div className="bg-warning text-primary text-center">
                <ul className="list-inline">
                    <li className="list-inline-item btn" onClick={()=> navigate('/authors')}>
                        <u>
                            <h4><HomeIcon color="primary"/>Home</h4>
                        </u>
                    </li>
                    <li className="list-inline-item btn" onClick={()=> navigate('/authors/new')}>
                        <u>
                            <h4><AddIcon color="primary"/>Add an author</h4>
                        </u>
                    </li>
                </ul>
            </div>
            <Update />
        </>
    )
}

export default UpdateView