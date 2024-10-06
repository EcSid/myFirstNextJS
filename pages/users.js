import A from '../components/A'
import MainContainer from '../components/MainContainer'

const Users = ({ users }) => {
	return (
		<MainContainer keywords={'users'}>
			<ul>
				{users.map(user => (
					<li key={user.id}>
						<A href={`users/${user.id}`} text={user.name} />
					</li>
				))}
			</ul>
		</MainContainer>
	)
}
export default Users

export async function getStaticProps() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users')
	const users = await response.json()
	return { props: { users } }
}
