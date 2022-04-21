// ** Styles
import '@styles/react/apps/app-users.scss'

// ** Custom Component
import Breadcrumbs from '@components/breadcrumbs'

// ** User List Component
import Table from './Table'

const ClubsList = () => {
  return (
    <div className='app-user-list'>
      <Breadcrumbs title='My Chapters' data={[{ title: 'Entities' }, { title: 'My Chapters' }]} />
      <Table />
    </div>
  )
}

export default ClubsList
