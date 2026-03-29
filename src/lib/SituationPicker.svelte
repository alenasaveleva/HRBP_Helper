<script>
  import { situations } from './data.js';

  const { onSelect, onBack } = $props();
</script>

<section class="picker">
  <a class="back-link" role="button" tabindex="0" onclick={onBack} onkeydown={(e) => e.key === 'Enter' && onBack()}>
    ← Back
  </a>
  <h2>What conversation are you preparing for?</h2>
  <p class="lead">Select a situation below to get a tailored strategy pack.</p>

  <div class="cards">
    {#each situations as sit}
      <button class="card" onclick={() => onSelect(sit.id)}>
        <div class="icon" style:background={sit.iconBg}>{sit.icon}</div>
        <h3>{sit.title}</h3>
        <p>{sit.description}</p>
      </button>
    {/each}
  </div>
</section>

<style>
  .picker {
    max-width: 900px;
    margin: 0 auto;
    padding: 3rem 1.5rem 4rem;
  }
  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    color: #64748b;
    font-size: 0.85rem;
    text-decoration: none;
    margin-bottom: 1.5rem;
    cursor: pointer;
  }
  .back-link:hover {
    color: #0f172a;
  }
  h2 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
  }
  .lead {
    color: #64748b;
    margin-bottom: 2rem;
    font-size: 0.95rem;
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1.25rem;
  }
  .card {
    background: #fff;
    border-radius: 16px;
    padding: 1.75rem;
    cursor: pointer;
    border: 2px solid transparent;
    transition: border-color 0.2s, box-shadow 0.2s, transform 0.15s;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
    text-align: left;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }
  .card:hover {
    border-color: #38bdf8;
    box-shadow: 0 8px 24px rgba(56, 189, 248, 0.12);
    transform: translateY(-3px);
  }
  .icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 1.05rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
  }
  .card p {
    font-size: 0.85rem;
    color: #64748b;
    line-height: 1.5;
  }
  @media (max-width: 600px) {
    .cards {
      grid-template-columns: 1fr;
    }
  }
</style>
