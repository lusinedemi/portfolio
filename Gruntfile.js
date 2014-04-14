module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    rsync: {
      options: {
        args: ['--verbose'],
        exclude: ['.git*', 'node_modules'],
        recursive: true,
        src: "./",
        dest: "/home/lusinede/www",
        host: "lusinede@lusinedemi.com",
        port: 18765
      },
      siteground: { }
    }
  });

  grunt.loadNpmTasks('grunt-rsync');

  grunt.registerTask('deploy', ['rsync:siteground']);
};
