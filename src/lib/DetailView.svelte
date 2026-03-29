<script>
  import { situations } from './data.js';

  const { situationId, onBack } = $props();

  let activeTab = $state(0);

  const situation = $derived(situations.find((s) => s.id === situationId));

  function switchTab(idx) {
    activeTab = idx;
  }
</script>

{#if situation}
  <section class="detail">
    <a class="back-link" role="button" tabindex="0" onclick={onBack} onkeydown={(e) => e.key === 'Enter' && onBack()}>
      ← Back to situations
    </a>

    <span class="hero-badge" style:background={situation.badge.bg} style:color={situation.badge.color}>
      {situation.badge.text}
    </span>
    <h2>{situation.detailTitle}</h2>
    <p class="detail-subtitle">{situation.detailSubtitle}</p>

    <div class="tabs">
      {#each situation.tabs as tab, i}
        <button
          class="tab-btn"
          class:active={activeTab === i}
          onclick={() => switchTab(i)}
        >
          {tab.label}
        </button>
      {/each}
    </div>

    {#each situation.tabs as tab, i}
      {#if activeTab === i}
        <div class="panel">
          {#each tab.sections as sec}
            <div class="section-block">
              <h4>{@html sec.title}</h4>

              {#if sec.type === 'ul'}
                <ul>
                  {#each sec.items as item}
                    <li>{@html item}</li>
                  {/each}
                </ul>
              {:else if sec.type === 'ol'}
                <ol>
                  {#each sec.items as item}
                    <li>{@html item}</li>
                  {/each}
                </ol>
              {:else if sec.type === 'p'}
                <p class="body-text">{@html sec.text}</p>
              {:else if sec.type === 'script'}
                <div class="script-box">{@html sec.text}</div>
              {/if}
            </div>
          {/each}
        </div>
      {/if}
    {/each}
  </section>
{/if}

<style>
  .detail {
    max-width: 880px;
    margin: 0 auto;
    padding: 2.5rem 1.5rem 4rem;
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
  .hero-badge {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 0.3rem 0.8rem;
    border-radius: 6px;
    margin-bottom: 0.75rem;
  }
  h2 {
    font-size: 1.65rem;
    font-weight: 800;
    margin-bottom: 0.3rem;
  }
  .detail-subtitle {
    color: #64748b;
    margin-bottom: 2rem;
    line-height: 1.5;
  }

  /* Tabs */
  .tabs {
    display: flex;
    gap: 0.5rem;
    border-bottom: 2px solid #e2e8f0;
    margin-bottom: 1.75rem;
    overflow-x: auto;
  }
  .tab-btn {
    padding: 0.6rem 1.2rem;
    border: none;
    background: none;
    font-weight: 600;
    font-size: 0.88rem;
    color: #94a3b8;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    margin-bottom: -2px;
    white-space: nowrap;
    transition: color 0.2s, border-color 0.2s;
    font-family: inherit;
  }
  .tab-btn.active {
    color: #0f172a;
    border-color: #38bdf8;
  }
  .tab-btn:hover:not(.active) {
    color: #475569;
  }

  /* Panels */
  .section-block {
    background: #fff;
    border-radius: 14px;
    padding: 1.5rem 1.75rem;
    margin-bottom: 1.25rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  .section-block h4 {
    font-size: 0.95rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .section-block ul,
  .section-block ol {
    padding-left: 1.2rem;
    line-height: 1.75;
    color: #334155;
    font-size: 0.9rem;
  }
  .body-text {
    line-height: 1.7;
    color: #334155;
    font-size: 0.9rem;
  }
  .script-box {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 1.25rem 1.5rem;
    margin-top: 0.75rem;
    font-size: 0.88rem;
    line-height: 1.7;
    color: #1e293b;
    font-style: italic;
  }

  @media (max-width: 600px) {
    .tabs {
      gap: 0.25rem;
    }
    .tab-btn {
      padding: 0.5rem 0.7rem;
      font-size: 0.8rem;
    }
  }
</style>
