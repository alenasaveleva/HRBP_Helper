<script>
  const { onStart } = $props();
</script>

<section class="welcome">
  <img src="{import.meta.env.BASE_URL}hero.gif" alt="HRBP Copilot" class="hero-gif" />
  <div class="logo">HRBP Copilot</div>
  <h1>Hi, <span class="accent">HRBP</span> 👋</h1>
  <p class="subtitle">
    Your AI-powered coach for the toughest conversations in HR. Get structured strategies,
    scripts, and psychological frameworks — before you walk in the room.
  </p>
  <button class="cta" onclick={onStart}>Choose a Situation →</button>
</section>

<style>
  .welcome {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    text-align: center;
    padding: 2rem;
    background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%);
    color: #fff;
  }
  .hero-gif {
    width: clamp(180px, 30vw, 280px);
    border-radius: 16px;
    margin-bottom: 1.5rem;
  }
  .logo {
    font-size: 1rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #94a3b8;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
    line-height: 1.15;
    margin-bottom: 0.75rem;
  }
  .accent {
    color: #38bdf8;
  }
  .subtitle {
    font-size: 1.15rem;
    color: #94a3b8;
    max-width: 520px;
    margin-bottom: 2.5rem;
    line-height: 1.6;
  }
  .cta {
    padding: 0.9rem 2.4rem;
    border: none;
    border-radius: 12px;
    background: #38bdf8;
    color: #0f172a;
    font-weight: 700;
    font-size: 1.05rem;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
  }
  .cta:hover {
    background: #7dd3fc;
    transform: translateY(-2px);
  }
</style>
