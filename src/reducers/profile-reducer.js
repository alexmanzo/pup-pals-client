const initialState = {
	profileInfo: {
		dogName: 'Jasper',
		dogPhotoPath: 'https://lh3.googleusercontent.com/tUWNMEM9zP48qD7wA23zA4ql4B8uIA_yMWKISSKXYxEJPrILeMLnPq3p08M34VFkuH6O1Fhdz0LmSEvSrapW_oO6RUrCQZVYASxQ7v8tr2P_CmdT0iLZFFjztWiEShuEeSi2yoJVzw=w2400',
		photoAlt: 'Black dog',
		dogAge: 7,
		dogBreed: 'Lab Mix',
		likes: 'Frolicking in the yard, looking out the window, chasing squirrels, and de-stuffing all the toys my humans buy me.',
		dislikes: "I'm scared of kids! I hide behind my human's legs when we meet one.",
		ownerInfo: {
			ownerPhotoPath: 'https://lh3.googleusercontent.com/i_Epqb0eHRpqICBCRc4LgkEtlT2V8RNAT9JUphIzoez9LIDlJ3aishtiEAG0iJdnJ9PYq2MBuR8NOaqfuBaQbFGaLdZahihIvKNrf7Bcjua9Oug8PK2pT3zWXKhbe8CPB1qj8W1V-w=w2400',
			ownerPhotoAlt: 'Short brown haired woman holding a black dog.',
			ownerName: 'Michelle Dogowner',
			ownerAge: 28,
			number: '555-555-5555',
			address: '25 Meadowbrook Dr',
			city: 'Durham',
			state: 'NC'
		}
	}
}

export default function profileReducer(state=initialState, action) {
	return state
}