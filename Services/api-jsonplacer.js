export async function fetchPosts() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=25"
  );
  const data = await res.json();
  return data;
}
export async function getDetails(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}
export async function getComments(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  const data = await res.json();
  return data;
}
