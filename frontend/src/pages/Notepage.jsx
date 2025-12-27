import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import ArrowLeft from '../assets/arrow-left.svg?react'

function Notepage() {
    const {id}=useParams();
    const noteId=id;
    const navigate=useNavigate();
    let [note,setNote]=useState(null)

    useEffect(()=>{
        getNote()
    },[noteId])


    let getNote=async ()=>{
        if(noteId==='new') return
        let response=await fetch(`/api/notes/${noteId}/`)
        let data =await response.json()
        setNote(data) 
   }

       const createNote=async ()=>{
        await fetch(`/api/notes/create/`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(note)
        })
    }

       const updateNote=async ()=>{
        await fetch(`/api/notes/${noteId}/update/`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(note)
        })
    }


    let deleteNote=async ()=>{
        await fetch(`/api/notes/${noteId}/delete/`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
        })
        navigate('/')
    }

    const handleSubmit=async()=>{
        if (noteId!=='new' && !note.body){
            await deleteNote()
        }else if(noteId!=='new'){
           await updateNote()
        }else if(noteId==='new'&&note!==null){
           await createNote()
        }
        navigate('/')
    }
  return (
    <>
        <div className='note'>
            <div className='note-header'>
                <h3>
                   <ArrowLeft onClick={handleSubmit}></ArrowLeft>
                </h3>
                {noteId !=='new'?(<button onClick={deleteNote}>Delete</button>):(<button onClick={handleSubmit}>Done</button>)}
                
            </div>
            <textarea onChange={(e)=>setNote({...note,body:e.target.value})} value={note?.body ||""}></textarea>
        </div>
    </>
  )
}

export default Notepage