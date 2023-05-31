import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import BlogSection from '../components/BlogSection';
import { db } from '../firebase';
import { toast } from 'react-toastify';
import Table from 'react-bootstrap/Table';

const Home = ({ user }) => {
    const [loading, setLoading] = useState(true);
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'clients'), (snapshot) => {
            let list = [];

            snapshot.docs.forEach((doc) => {
                list.push({ id: doc.id, ...doc.data() });
            });

            setClients(list);
            setLoading(false);
        }, (error) => {
            console.log(error);
        });

        return () => {
            unsub();
        };
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer ce client ?')) {
            try {
                setLoading(true);
                await deleteDoc(doc(db, 'clients', id));
                toast.success('Client supprimé avec succès');
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <div className="row mx-0">
            <div className="col-md-8 mx-auto text-center">
                <h2><br/><br/>Liste des clients<br/> <br/></h2>

                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="table-responsive">
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Prénom</th>
                                <th>Nom</th>
                                <th>Avance</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {clients?.map((client) => (
                                <BlogSection
                                    key={client.id}
                                    user={user}
                                    handleDelete={handleDelete}
                                    {...client}
                                />
                            ))}
                            </tbody>
                        </Table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
