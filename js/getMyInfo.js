const getMyInfo=async () => {
	const res=await fetch("https://api-artific.vercel.app/portfolio/api/profile")
	const data=await res.json()
	if (res.status!==200) {
		return null
	}
	return data.data
}

export default getMyInfo