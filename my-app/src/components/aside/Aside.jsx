import "./Aside.css";
function Aside() {
  // <!-- Navigation Drawer -->
  return (
    <div id="nav-drawer" class="bg-style hide">
      <a href="/" className="nav-drawer-items-padding">
        <i class="material-icons md-dark md-18 padding-l-r">home</i>
        <span>Home</span>
      </a>
      <a href="/" className="nav-drawer-items-padding">
        <i class="material-icons md-dark md-18 padding-l-r">account_circle</i>
        <span>My Channel</span>
      </a>
      <a href="/" className="nav-drawer-items-padding">
        <i class="material-icons md-dark md-18 padding-l-r">
          play_circle_filled
        </i>
        <span>Subscriptions</span>
      </a>
      <a href="/" className="nav-drawer-items-padding">
        <i class="material-icons md-dark md-18 padding-l-r">history</i>
        <span>History</span>
      </a>
      <a href="/" className="nav-drawer-items-padding">
        <i class="material-icons md-dark md-18 padding-l-r">schedule</i>
        <span>Watch Later</span>
      </a>
      <h5>PLAYLISTS</h5>
      <a href="/" className="nav-drawer-items-padding">
        <i class="material-icons md-dark md-18 padding-l-r">list</i>
        <span>BJJ</span>
      </a>
      <a href="/" className="nav-drawer-items-padding">
        <i class="material-icons md-dark md-18 padding-l-r">list</i>
        <span>Judo</span>
      </a>
      <a href="/" className="nav-drawer-items-padding">
        <i class="material-icons md-dark md-18 padding-l-r">list</i>
        <span>Favorites</span>
      </a>

      <span class="btn-flat">Show more</span>
    </div>
  );
}
export { Aside };
