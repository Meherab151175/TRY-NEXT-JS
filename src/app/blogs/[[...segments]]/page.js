

const SingleBlogs = ({params}) => {
    console.log(params.segments)
    const [year,id] = params.segments || []
    return (
        <div>
            SingleBlogs Year:{year || new Date().getFullYear()} Id:{id}
        </div>
    );
};

export default SingleBlogs;