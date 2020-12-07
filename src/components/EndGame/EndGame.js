import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from '../../store/store';
import './EndGame.scss';

export const EndGame = ({ toggleEndGame }) => {
  const dispatch = useDispatch();
  const storage = useSelector(store => store);
  const [needRedirect, setNeedRedirect] = useState(false);

  const save = (event) => {
    event.preventDefault()
    dispatch(actions.save());
    setNeedRedirect(true);
  }

  const handleChange = (event) => {
    dispatch(actions.change(event.target.name ,event.target.value))
  }

  return (
    <>
      {needRedirect ? (
        <>
          <p className="end-game__message">Your result saved!</p>
          <Link className="end-game__link" to="./" >Back to menu</Link>
        </>
      ) : (
        <form onSubmit={save} className="end-game">
          <input
            name="name"
            value={storage.name}
            className="end-game__name"
            type="text"
            placeholder="Enter your name and press Enter"
            onChange={handleChange}
          ></input>
          <div className="end-game__buttons">
            <Link className="end-game__link" to="./" onClick={save}>Save</Link>
            <Link className="end-game__link" to="./">Don't save!</Link>
          </div>
        </form>
      )}
    </>
  );
}
