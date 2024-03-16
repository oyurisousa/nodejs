import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../../../utils/api";

import RoundedImage from "../../layouts/RoundedImage";

import styles from "./Dashboard.module.css";

import useFlashMessage from "../../../hooks/useFlashMessage";

function MyPets() {
	const [pets, setPets] = useState([]);
	const [token] = useState(localStorage.getItem("token") || "");
	// const [setFlashMessage] = useFlashMessage();

	useEffect(() => {
		console.log("Fetching pets...");
		api
			.get("/pets/mypets", {
				headers: {
					Authorization: `Bearer ${JSON.parse(token)}`,
				},
			})
			.then((response) => {
				console.log("Pets data:", response.data.myPets);
				setPets(response.data.myPets);
			})
			.catch((err) => {
				console.error("Error fetching pets:", err);
			});
	}, [token]);
	return (
		<section>
			<div className={styles.petslist_header}>
				<h1>Meus Pets Cadastrados</h1>
				<Link to={"/pet/add"}>Cadastrar Pet</Link>
			</div>
			<div className={styles.petslist_container}>
				{pets.length > 0 &&
					pets.map((pet) => (
						<div key={pet._id} className={styles.petlist_row}>
							<RoundedImage
								src={`${process.env.REACT_APP_API}/images/pets/${pet.images[0]}`}
								alt={pet.name}
								width="px75"
							/>
							<span className="bold">{pet.name}</span>
							<div className={styles.actions}>
								{pet.available ? (
									<>
										{pet.adopter && (
											<button className={styles.conclude_btn}>
												Concluir adoção
											</button>
										)}
										<Link to={`/pet/edit/${pet.id}`}>Editar</Link>
										<button>Excluir</button>
									</>
								) : (
									<p>Pet já adotado</p>
								)}
							</div>
						</div>
					))}
				{pets.length === 0 && <p>Não há pets cadastrados</p>}
			</div>
		</section>
	);
}

export default MyPets;
