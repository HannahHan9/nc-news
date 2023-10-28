const UserMenuIcon = ({ open, setOpen, img }) => {
    return (
        <button open={open} onClick={() => setOpen(!open)} aria-hidden="true">
            <span $img={img}></span>
            <span>User Menu Icon</span>
        </button>
    );
};

export default UserMenuIcon;
