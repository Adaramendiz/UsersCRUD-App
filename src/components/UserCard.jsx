import './styles/UserCard.css'

const UserCard = ({user, deleteUserById, setUpdateInfo, handleOpenForm}) => {

  const handleDelete = ( ) => {
    deleteUserById('/users/', user.id)
  }

  const handleUpdate = ( ) => {
    setUpdateInfo(user)
    handleOpenForm()
  }

  return (
    <article className="article__card">
      <h2 className='article__card-title' >{user.first_name} {user.last_name}</h2>
      <hr  />
      <ul>
        <li className='article__card-email-birthday'>
          <span className='article__card-email' >Email </span>
          <span>{user.email}</span>
        </li>
        <li className='article__card-email-birthday'>
          <span className='article__card-birthday' >Birthday</span>
          <span> <i className='bx bx-gift'></i> {user.birthday}</span>
        </li>
      </ul>
      <hr />
      <footer className='footer__btn'>
        <button className='footer__btn-delete' onClick={handleDelete}><i className='bx bx-trash'></i></button>
        <button className='footer__btn-update' onClick={handleUpdate}><i className='bx bx-pencil'></i></button>
      </footer>

    </article>
  )
}

export default UserCard