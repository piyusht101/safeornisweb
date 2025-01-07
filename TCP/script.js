function showContent(tabName) {
  const tabContents = document.querySelectorAll(".tab-content");

  // Hide all tab contents
  tabContents.forEach((tabContent) => {
    tabContent.style.display = "none";
  });

  // Show the selected tab content
  document.getElementById(`${tabName}Content`).style.display = "block";
}
