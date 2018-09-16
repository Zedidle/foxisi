
<template>
    <h2 class='app-title'>{{ msg }}</h2>
</template>

<script>
export default {
  name: 'welcome',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h2{
		font-size: 1.5rem;
		margin-bottom:0.5rem;
		color: #FFF;
	}
</style>
