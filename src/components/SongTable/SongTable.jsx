import React from 'react';

const SongTable =  (props) => {
    return(
        <table>
            <tr>
                <th>Song Title</th>
                <th>Album</th>
                <th>Artist</th>
                <th>Genre</th>
                <th>Release Date</th>
            </tr>
            {props.songs.map(song => {
                return(
                    <tr>
                        <td>song.title</td>
                        <td>song.album</td>
                        <td>song.artist</td>
                        <td>song.genre</td>
                        <td>song.release_date</td>
                    </tr>
                )
            })}

        </table>
    )
}

export default SongTable;