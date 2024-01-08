import {Link , useLoaderData} from "react-router-dom"

function Index(props) {
  console.count()
    const diaries =useLoaderData()
    return diaries.map((diary) => (
      <div key={diary._id} className="diary">
        {/* Use the Link component to create a link to each diary */}
        <Link to={`/${diary._id}`}>
          {/* Display the diary's description as an p heading */}
          <p>{diary.name}</p>
          <p>{diary.description}</p>
          <p>{diary.date}</p>
        </Link>
    </div>
    ));
  }

export default Index