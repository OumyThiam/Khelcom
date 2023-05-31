import React from 'react';
import FontAwesome from "react-fontawesome";


import { Link } from 'react-router-dom';

const BlogSection = ({
                         id,
                         prenom,
                         nom,
                         telephone,
                         avance,
                         restant,
                         userId,
                         author,
                         user,
                         handleDelete,
                     }) => {
    console.log('userId:', userId);
    console.log('user.uid:', user && user.uid);

    return (


        <tr key={id}>

            <td>{prenom} </td>
            <td>{nom}</td>
            <td>{restant} CFA</td>


            <td>
                <Link to={`/detail/${id}`}>
                    <button className="btn btn-read">Détails</button>
                </Link>



                {

                    user && user.uid === userId && (



                    <div style={{ float: "right" }}>
                        <FontAwesome
                            name="trash"
                            style={{ margin: "15px", cursor: "pointer" }}
                            size="2x"
                            onClick={() => handleDelete(id)}
                        />
                        <Link to={`/update/${id}`}>
                            <FontAwesome
                                name="edit"
                                style={{ cursor: "pointer" }}
                                size="2x"

                            />
                        </Link>
                    </div>
                    )}

            </td>
        </tr>

    )

};

export default BlogSection;
