<script>
  import Welcome from './lib/Welcome.svelte';
  import SituationPicker from './lib/SituationPicker.svelte';
  import DetailView from './lib/DetailView.svelte';

  let screen = $state('welcome');
  let selectedSituation = $state(null);

  function goToSituations() {
    screen = 'situations';
    window.scrollTo(0, 0);
  }

  function goToWelcome() {
    screen = 'welcome';
    window.scrollTo(0, 0);
  }

  function openDetail(id) {
    selectedSituation = id;
    screen = 'detail';
    window.scrollTo(0, 0);
  }

  function backToSituations() {
    screen = 'situations';
    selectedSituation = null;
    window.scrollTo(0, 0);
  }
</script>

{#if screen === 'welcome'}
  <Welcome onStart={goToSituations} />
{:else if screen === 'situations'}
  <SituationPicker onSelect={openDetail} onBack={goToWelcome} />
{:else if screen === 'detail' && selectedSituation}
  <DetailView situationId={selectedSituation} onBack={backToSituations} />
{/if}
