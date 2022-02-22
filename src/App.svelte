<script>
	import Header from './components/Header.svelte'
	import Footer from './components/Footer.svelte'
	import PollList from './components/PollList.svelte'
	import Tabs from './shared/Tabs.svelte'
	import CreatePollForm from './components/CreatePollForm.svelte'

	let items = ['Current Survey', 'Add New Survey'];
	
	let activeItem = 'Current Survey';
	

	const tabChange = (e) => {
		activeItem = e.detail;
	}

	

	const handleAdd = (e) => {	
		
		activeItem = 'Current Survey' 
	}

	
</script>

<Header  />
<main>
	<Tabs {items} {activeItem} on:tabChange={tabChange} />
	{#if activeItem === 'Current Survey' }
		<PollList  />
	{:else if activeItem === 'Add New Survey' }
	<CreatePollForm on:add={handleAdd} />
	{/if}
	
</main>
<Footer />

<style>
	main{
		
		max-width: 960px;
		margin: 40px auto;
	}
	
	
</style>