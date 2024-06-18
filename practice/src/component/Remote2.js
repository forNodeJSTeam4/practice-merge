import calcStore from '../store/calcStore'

const Remote2 =({count})=>{
	const {myScore} = calcStore()
	return(
		<div  style={{margin:'10px', padding:'10px', border: '1px solid gray'}}>
			<div>count: {count}</div>
			<div>곱셈 나눗셈 반응 myScore: {myScore}</div>
		</div>
	)
}

export default Remote2;