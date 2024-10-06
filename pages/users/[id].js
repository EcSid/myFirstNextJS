import { useRouter } from 'next/router'
import styles from '../../styles/User.module.css'
import MainContainer from '../../components/MainContainer'
export default function User({ user }) {
	const { query } = useRouter()
	return (
		<MainContainer keywords={user.name}>
			<div className={styles.user}>
				<p>
					Пользователь c id <span>{query.id}</span>:
				</p>
				<p>{user.name}</p>
			</div>
		</MainContainer>
	)
}

export async function getServerSideProps(context) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/users/${context.params.id}`
	)
	const user = await response.json()
	return { props: { user } }
}
