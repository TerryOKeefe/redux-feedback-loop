import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './SupportForm.css';

// function for SupportForm component
function SupportForm() {
    // variable to hold support input
    const [newSupport, setNewSupport] = useState('');

    // variables for dispatch and useHistory
    const dispatch = useDispatch();
    const history = useHistory();

    // function to dispatch support rating
    const supportSubmit = (event) => {
        event.preventDefault();

        // dispatch the new data to store
        dispatch({
            type : 'ADD_SUPPORT',
            payload : newSupport
        });

        // on click change to comment route
        history.push('/comment');
    } // end supportSubmit

    // handle click to take us to /comment
    const handleClick = () => {

    } // end handleClick

    // console log to see that the rating shows
    console.log('Support Rating:', newSupport);

    return(
        <div>
            <div>
                <h2>How well are you being supported?</h2>
            </div>
            <form onSubmit={supportSubmit}>
                <TextField
                id="standard-basic"
                label="Support Rating"
                type="number"
                required="required"
                placeholder="1-10"
                value={newSupport}
                onChange={(event) => setNewSupport(event.target.value)}
                />
                <Button 
                    size="medium"
                    variant="contained"
                    color="primary"
                    type="submit" 
                    value="Next" 
                >
                    Next
                </Button>
            </form>
        </div>
    )
} // end SupportForm

// export SupportForm
export default SupportForm;