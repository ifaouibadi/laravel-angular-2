<!DOCTYPE html>
<html>
<head>
	<title>{$title}</title>
	<base href="/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 1. Load libraries -->
    <!-- IE required polyfills, in this exact order -->
    <script src="{{ elixir('assets/js/vendors.js') }}"></script>
   

</head>
<body>
    <my-app>Loading...</my-app>
  

    <script>
        System.config({
            packages: {   
                assets: {
                    js: {
                        format: 'register',
                        defaultExtension: 'js'
                    }
                }
            }
        });
         System.import('assets/js/app')
            .then(null, console.error.bind(console));
    </script>
</body>
</html>