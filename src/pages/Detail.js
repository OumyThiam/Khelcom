import React,{useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import {db} from "../firebase";
import {doc, getDoc} from "firebase/firestore";
import { PaperClipIcon } from '@heroicons/react/20/solid'
import "./tailwing.css";


const Detail = ({ setActive, user }) => {

    const {id} = useParams();
    const [client, setClient]= useState(null);

   useEffect(() => {
       id && getClientDetail();
   }, [id])
    const getClientDetail = async () =>{
       const docRef = doc(db, "clients", id);
       const clientDetail = await getDoc(docRef);
       setClient(clientDetail.data());
        setActive(null);

    }

        return (
      <div>
          <div className="px-4 sm:px-0">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Detail Client</h2>

          </div>
          <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900">Prenom Nom</dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">   {client?.prenom.toUpperCase()} {client?.nom.toUpperCase()}
                      </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900">Téléphone</dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">   {client?.telephone}
                      </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900">Nombre de piéce</dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{client?.nombre_piece} CFA</dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900">Prix unitaire</dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{client?.prix_unitaire} CFA</dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900">Prix total</dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{client?.prix_total} CFA</dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900">Avance</dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{client?.avance} CFA</dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900">Restant</dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{client?.restant} CFA</dd>
                  </div>

                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900">Auteur</dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"> {client?.author.toUpperCase()}
                      </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900">Date insertion</dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">  &nbsp;
                          {client?.timestamp.toDate().toDateString()}
                      </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="text-sm font-medium leading-6 text-gray-900">Commentaire</dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          {client?.description}
                      </dd>
                  </div>


              </dl>
          </div>
      </div>



  )
}

export default Detail;
