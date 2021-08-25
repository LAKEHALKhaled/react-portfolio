import './testimonials.scss'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
 import rArrow from '../../img/right-arrow.png';
export default function Testimonials() {
    const data = [
        {
          id: 1,
          name: "Mohammed Fellak",
          title: "Senior Developer at Celsius",
          img:
            "https://media-exp1.licdn.com/dms/image/C4E03AQF50VlnmROUIQ/profile-displayphoto-shrink_200_200/0/1624468840360?e=1635379200&v=beta&t=OlbFjgz7P1cpnXAfmaeYFLjviqQBNdvNQdKsi4FsLxY",
          link: "https://www.linkedin.com/in/systemdz/",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        },
        {
          id: 2,
          name: "someone",
          title: "Co-Founder of DELKA",
          img:
            "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          link: "https://www.linkedin.com/in/systemdz/",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
          featured: true,
        },
        {
          id: 3,
          name: "someone",
          title: "CEO of ALBI",
          img:
            "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          link: "https://www.linkedin.com/in/systemdz/",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
      ];
    return (
        <div className ="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map(d=>(
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src={rArrow} className="left" alt="" />
                        <img src={d.img} className="user" alt="" />
                        {/* <img src={d.icon} className="right" alt="" /> */}
                        <a href={d.link} target="_blank" rel="noreferrer"><LinkedInIcon className="right"/></a>
                    </div>
                    <div className="center">
                    {d.desc} </div>
                    <div className="bottom">
                    <h3>{d.name}</h3>
                    <h4>{d.title}</h4>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
