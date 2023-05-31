import React, { useState, useEffect } from "react";
import "@pathofdev/react-tag-input/build/index.css";
import { db } from "../firebase";
import { useNavigate, useParams } from "react-router-dom";

import {
  addDoc,
  collection,
  getDoc,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";

const initialState = {
  nom: "",
  prenom: "",
  telephone: "",
  nombre_piece: "",
  prix_unitaire: "",
  prix_total: "",
  avance: "",
  restant: "",
  description: "",
};

const AddEditBlog = ({ user, setActive }) => {

  const [form, setForm] = useState(initialState);
  const [progress, setProgress] = useState(null);

  const { id } = useParams();

  const navigate = useNavigate();

  const {
    nom,
    prenom,
    telephone,
    nombre_piece,
    prix_unitaire,
    avance,
    description,
  } = form;



  useEffect(() => {
    id && getClientDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const getClientDetail = async () => {
    const docRef = doc(db, "clients", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setForm({ ...snapshot.data() });
    }
    setActive(null);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    const { name, value } = e.target;

    if (name === "nombre_piece") {
      const prixTotal = parseInt(value) * parseInt(form.prix_unitaire);
      const restant = prixTotal - parseInt(form.avance);

      setForm({ ...form, [name]: value, prix_total: prixTotal, restant: restant });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
        nom &&
        prenom &&
        telephone &&
        nombre_piece &&
        prix_unitaire &&
        avance &&
        description
    ) {
      const prixTotal = nombre_piece * prix_unitaire;
      const restant = prixTotal - avance;

      if (!id) {
        try {
          await addDoc(collection(db, "clients"), {
            ...form,
            prix_total: prixTotal,
            restant: restant,
            timestamp: serverTimestamp(),
            author: user.displayName,
            userId: user.uid,
          });
          navigate("/home")
          toast.success("Le client est créé avec succès");

        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          await updateDoc(doc(db, "clients", id), {
            ...form,
            prix_total: prixTotal,
            restant: restant,
            timestamp: serverTimestamp(),
            author: user.displayName,
            userId: user.uid,
          });
          toast.success("Client mis à jour avec succès");
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      return toast.error("Tous les champs doivent être remplis");
    }


  };

  return (
      <div className="container-fluid mb-4">
        <div className="container">
          <div className="col-12">
            <div className="text-center heading py-2">
              {id ? "Mettre a jour" : "Ajouter client"}
            </div>
          </div>
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-10 col-md-8 col-lg-6">
              <form className="row blog-form" onSubmit={handleSubmit}>
                <div className="col-12 py-3">
                  <label className="form-list">Prénom</label>
                  <input
                      type="text"
                      className="form-control input-text-box"
                      placeholder="prénom"
                      name="prenom"
                      value={prenom}
                      onChange={handleChange}
                  />
                </div>

                <div className="col-12 py-3">
                  <label className="form-list">Nom</label>
                  <input
                      type="text"
                      className="form-control input-text-box"
                      placeholder="nom"
                      name="nom"
                      value={nom}
                      onChange={handleChange}
                  />
                </div>
                <div className="col-12 py-3">
                  <label className="form-list">Téléphone</label>
                  <input
                      type="text"
                      className="form-control input-text-box"
                      placeholder="telephone"
                      name="telephone"
                      value={telephone}
                      onChange={handleChange}
                  />
                </div>
                <div className="col-12 py-3">
                  <label className="form-list">Nombre de piéces</label>
                  <input
                      type="number"
                      className="form-control input-text-box"
                      placeholder="nombre de piece"
                      name="nombre_piece"
                      value={nombre_piece}
                      onChange={handleChange}
                  />
                </div>
                <div className="col-12 py-3">
                  <label className="form-list">Prix unitaire</label>
                  <input
                      type="number"
                      className="form-control input-text-box"
                      placeholder="prix unitaire"
                      name="prix_unitaire"
                      value={prix_unitaire}
                      onChange={handleChange}
                  />
                </div>
                <label className="form-list" >Avance</label>

                <div className="col-12 py-3">
                  <input
                      type="number"
                      className="form-control input-text-box"
                      placeholder="Avance"
                      name="avance"
                      value={avance}
                      onChange={handleChange}
                  />
                </div>

                <div className="col-12 py-3">
                  <label className="form-list">Commentaire</label>
                <textarea
                    className="form-control description-box"
                    placeholder="Commentaire"
                    value={description}
                    name="description"
                    onChange={handleChange}
                />
                </div>
                <div className="col-12 py-3 text-center">
                  <button
                      className="btn btn-add"
                      type="submit"
                      disabled={progress !== null && progress < 100}
                  >
                    {id ? "Update" : "Enregistrer"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AddEditBlog;
