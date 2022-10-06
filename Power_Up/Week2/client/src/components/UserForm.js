import styles from './UserForm.module.css';

const UserForm = (props) => {
    const {name, email, password, setPassword, setEmail, setName, setNewUser, newUser} = props;

    
    const handleName = (e) => {
        setName(e.target.value);
    }
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    
    const createUser = (e) => {
        e.preventDefault();
        const addUser = { name, email, password };
        console.log(addUser);
        setNewUser([...newUser, addUser])
        setName("");
        setEmail("");
        setPassword("");
    }

    return (
        <div className={styles.form}>
            <fieldset>
                <legend>Form</legend>
                <form onSubmit = { createUser } >
                    <div>
                        <label>Name: </label>
                        <input type="text"  onChange={handleName} value={name} />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input type="text"  onChange={handleEmail} value={email} />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="text"  onChange={handlePassword} value={password} />
                    </div>
                    <input type="submit" value= "Submit" />
                </form>
            </fieldset>
        </div>
    )
}

export default UserForm