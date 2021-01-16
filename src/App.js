import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.scss";
import CompetenceItem from "./components/CompetenceItem";
import ExperienceItem from "./components/ExperienceItem";
import InformaticCompetence from "./components/InformaticCompetence";
import ProfilePicture from "./components/ProfilePicture";
import ProfileSummary from "./components/ProfileSummary";
import SocialMedia from "./components/SocialMedia";

const App = () => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-3">
                <ProfilePicture />
                <ProfileSummary />
            </div>
            <div className="col pt-3">
                <h5 className="mb-4">Diplômes et Formations</h5>
                <ExperienceItem left="D'octobre 2017 à juin 2019">
                    <h6 className="text-uppercase">
                        BREVET DE TECHNICIEN SUPERIEUR(BTS) en GESTION DES
                        SYSTEMES INFORMATIONS(GSI)
                    </h6>
                    <p className="font-weight-light">
                        <span className="color-tangerine">
                            Institut Universitère de la côte (IUC)
                        </span>{" "}
                        Logbessou
                    </p>
                    <p className="font-weight-light">
                        J'ai été formé en gestion des systèmes d'informations
                        (GSI), avec une mention "Bien" à mon examen. Je suis
                        capable de gérer des systèmes informatiques d'une
                        entreprise , gérer une base de données et de promouvoir
                        des logiciels lier à une entreprise et à son réseau.
                    </p>
                </ExperienceItem>
                <ExperienceItem left="De septembre 2016 à mai 2017">
                    <h6 className="text-uppercase">
                        BACCALAUREAT DE L'ENSEIGNEMENT SECONDAIRE GENERAL
                    </h6>
                    <p className="font-weight-light">
                        <span className="color-tangerine">
                            College Billingue LAVAL
                        </span>{" "}
                        Bonamoussadi, Makepe
                    </p>
                </ExperienceItem>
                <ExperienceItem left="De septembre 2015 à juin 2016">
                    <h6 className="text-uppercase">
                        PROBATOIRE DE L'ENSEIGNEMENT SECONDAIRE GENERAL
                    </h6>
                    <p className="font-weight-light">
                        <span className="color-tangerine">
                            College Billingue LAVAL
                        </span>{" "}
                        Bonamoussadi, Makepe
                    </p>
                </ExperienceItem>
                <hr />
                <h5 className="mb-4">Expériences professionnelles</h5>
                <ExperienceItem left="De juillet 2017 à août 2017">
                    <h6 className="text-uppercase">Stagiaire</h6>
                    <p className="font-weight-light">
                        <span className="color-tangerine">
                            Centrale de Services Maritimes
                        </span>{" "}
                        Douala, Akwa PMUC
                    </p>
                </ExperienceItem>
                <ExperienceItem left="De juillet 2018 à septembre 2018">
                    <h6 className="text-uppercase">Stagiaire</h6>
                    <p className="font-weight-light">
                        <span className="color-tangerine">IPANS Sarl</span>{" "}
                        Douala, Bonamoussadi
                    </p>
                </ExperienceItem>
                <hr />
                <h5 className="mb-4">Compétences</h5>
                <CompetenceItem title="Gestion de projet" note={40} />
                <CompetenceItem title="Analyse de données" note={55} />
                <CompetenceItem title="Wordpress" note={75} styleClass="mb-4" />
                <hr />
                <h5 className="mb-4">Informatique</h5>
                <InformaticCompetence note={10} title="HTML5/CSS3/JS">
                    <p className="small">
                        Bonne connaissance et compréhension de ce langage de
                        création de page web
                    </p>
                </InformaticCompetence>
                <InformaticCompetence note={10} title="JAVA EE">
                    <p className="small">
                        Niveau Moyen, je connais les bases et j'ai deja eu a
                        créer un logiciel avec ce langage, qui portait sur une
                        application de vente et de gestion de stock de
                        médicaments pour une Pharmacie
                    </p>
                </InformaticCompetence>
                <InformaticCompetence note={10} title="MySQL">
                    <p className="small">
                        Mes compétences dans ce domaine sont basiques, je sais
                        utiliser les différentes requêtes SQL
                    </p>
                </InformaticCompetence>
                <InformaticCompetence note={10} title="Visual Basic .NET">
                    <p className="small">
                        Bonne maitriser et connaissance du langage dans le but
                        de produits des applications de bureau
                    </p>
                </InformaticCompetence>
                <InformaticCompetence note={10} title="UML">
                    <p className="small">
                        La production des différents diagrammes d'UML de qualité
                        et qui sont lisibles, et surtout bien concis n'a plus de
                        secret pour moi.
                    </p>
                </InformaticCompetence>
                <InformaticCompetence
                    note={70}
                    title="Trello"
                ></InformaticCompetence>
                <hr />
                <SocialMedia />
            </div>
        </div>
    </div>
);

export default App;
