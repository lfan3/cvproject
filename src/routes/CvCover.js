import anime from 'animejs/lib/anime.es.js';
import {useEffect,Fragment} from 'react';
import  OrganicForm from '../components/OrganicForm';
import { useHistory } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import Icon from '@material-ui/core/Icon';

export default function CvCover(props){
    const history = useHistory();

    function handleClick() {
      history.push("/cv");
    }

    useEffect(()=>{
        const rooEl = document.getElementById('root');
        if(rooEl.className === 'cvRoot'){
            rooEl.classList.remove('cvRoot');
        }
        rooEl.classList.add('cvCoverRoot');
    }, [])

    useEffect(()=>{
        const tl = anime.timeline({
            easing:'easeInOutQuad',
            duration:500,
            delay:400
        });
        tl.add({
            targets:'.jian',
            opacity:[0, 1]
        }).add({
            targets:'.li',
            opacity:[0, 1]
        })
    })
    return(
        <Fragment>
            <OrganicForm/>
            <div className='organic--title' onClick={handleClick}>
            <button>
                <div className="letter jian">简</div>
                <div className="letter li">历</div>
            </button>
            </div>
            <div className='ghcv'>
                <a href="https://github.com/lfan3" className='ghcv--link'>
                    <GitHubIcon viewBox={'0 -1 26 26'} />
                </a>
            </div>
        </Fragment>

    )
}