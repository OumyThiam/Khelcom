import React from "react";

const APropos = ({ user }) => {
    return (
        <div className="container">
            <h1 className="text-center mb-4">À Propos</h1>
            <div className="about-content">
                <p>
                    Bienvenue dans notre application de gestion des clients et des commandes.
                </p>
                <p>
                    L'objectif principal de notre application est de fournir une interface conviviale et facile à utiliser pour gérer les informations des clients, y compris leurs coordonnées, les commandes passées et les montants payés.
                </p>
                <p>
                    Voici quelques fonctionnalités clés de notre application :
                </p>
                <ul>
                    <li>
                        <strong>Authentification :</strong> L'application requiert une authentification pour accéder aux fonctionnalités de gestion des clients. Cela permet de sécuriser les données et de limiter l'accès aux utilisateurs autorisés. Seuls les utilisateurs authentifiés peuvent accéder à l'application et voir les informations des clients.
                    </li>
                    <li>
                        <strong>Gestion des clients :</strong> Vous pouvez ajouter, modifier et supprimer des clients. Chaque client a des informations telles que le prénom, le nom, le numéro de téléphone, le nombre de pièces achetées, le prix unitaire, le prix total, l'avance et le montant restant. Vous pouvez facilement mettre à jour les informations d'un client en fonction de ses commandes et de ses paiements.
                    </li>
                    <li>
                        <strong>Gestion des commandes :</strong> Vous pouvez enregistrer les commandes passées par chaque client. Les montants totaux et les montants restants sont automatiquement calculés en fonction du nombre de pièces et des paiements effectués. Cela vous permet de garder une trace précise des commandes et de suivre les paiements des clients.
                    </li>
                    <li>
                        <strong>Contrôle d'accès :</strong> Chaque client est associé à un auteur, qui est l'utilisateur qui l'a créé. Seul l'auteur d'un client peut modifier les informations de ce client. Les autres utilisateurs peuvent voir les informations des clients, mais ne peuvent pas les modifier. Cela garantit l'intégrité des données et évite les modifications indésirables.
                    </li>
                </ul>
                <p>
                    Notre application vise à simplifier et à automatiser la gestion des clients et des commandes, en offrant une interface intuitive et des fonctionnalités robustes. Nous espérons que cette application vous sera utile dans votre activité professionnelle et facilitera votre gestion des clients.  Merci de votre utilisation !
                </p>
            </div>
            <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        .text-center {
          text-align: center;
        }

        .mb-4 {
          margin-bottom: 4rem;
        }

        .about-content {
          font-size: 16px;
          line-height: 1.6;
        }

        ul {
          list-style: disc;
          margin-left: 20px;
        }

        li {
          margin-bottom: 10px;
          list-style: none;
        }
      `}</style>
        </div>
    );
};

export default APropos;
