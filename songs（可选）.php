<?php
// 示例：从数据库中获取歌曲列表
$songs = [
    ['title' => '歌曲1', 'artist' => '艺术家1', 'src' => 'song1.mp3', 'cover' => 'cover1.jpg'],
    ['title' => '歌曲2', 'artist' => '艺术家2', 'src' => 'song2.mp3', 'cover' => 'cover2.jpg'],
    ['title' => '歌曲3', 'artist' => '艺术家3', 'src' => 'song3.mp3', 'cover' => 'cover3.jpg']
];

header('Content-Type: application/json');
echo json_encode($songs);
?>
