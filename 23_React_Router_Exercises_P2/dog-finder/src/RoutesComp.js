import { Routes, Route, Navigate } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';

const RoutesComp = (props) => {
    return (
        <div>
            <Routes>
                <Route path='/dogs' element={<DogList dogs={props.dogs} />} />
                <Route path='/dogs/:dogName' element={<DogDetails dogs={props.dogs} />} />
                <Route path='*' element={<Navigate to='/dogs' />} />
            </Routes>
        </div>
    )
}
export default RoutesComp;