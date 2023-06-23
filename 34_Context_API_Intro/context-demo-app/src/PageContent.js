
const styles = {
    backgroundColor: "white",
    height: "100vh",
    width: "100vw"
}
const PageContent = (props) => {
    return <div style={styles}>{props.children}</div>
}

export default PageContent;