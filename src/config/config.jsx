let env = {
    'local': {
      // 'rest_url': 'http://api.valley.com.np',
      'rest_url': 'http://localhost:8000',
      'redirect_url': 'http://localhost:3000',
      'title': 'local'
    },
  };

    // export config
    export const config = () => {
      // console.log(env['local']);
      return env['local'] ;
    };